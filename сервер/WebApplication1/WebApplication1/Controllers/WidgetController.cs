using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("widgets/[action]")]
    public class WidgetController
    {
        
        [HttpGet(Name = "get_widgets")]
        async public Task<List<Widget>> GetWidget(int id)
        {
            var helper = new Helper();
            var db = helper.GetContext();
            var widgetsList = await (from dashboard_widget in db.DashboardWidgets
                                     join dashboard in db.Dashboards on dashboard_widget.IdDashboard equals dashboard.Id
                                     join widgets in db.Widgets on dashboard_widget.IdWidget equals widgets.Id
                                     where dashboard.Id == id
                                     select new Widget
                                     {
                                         Id = widgets.Id,
                                         Nazvanie = widgets.Nazvanie,
                                         DataSozdania = widgets.DataSozdania,
                                         VremiaObnovlenia = widgets.VremiaObnovlenia,
                                         IdWidgetType = widgets.IdWidgetType,
                                         IdIstochnikDanih = widgets.IdIstochnikDanih
                                     }).ToListAsync();

            return widgetsList;
        }
        [HttpGet]
        public async Task<IResult> GetIstochnickDanyh(int id)
        {
            var helper = new Helper();
            var context = helper.GetContext();
                var widget = await context.Widgets.FirstOrDefaultAsync(w => w.Id == id);

                if (widget == null)
                {
                    return Results.NotFound();
                }
                var istochnikDanyh = await context.IstochnikDanyhs
                    .FirstOrDefaultAsync(i => i.Id == widget.IdIstochnikDanih);

                if (istochnikDanyh == null || string.IsNullOrWhiteSpace(istochnikDanyh.ConnectionString))
                {
                    return Results.BadRequest("Источник данных не найден или отсутствует путь к файлу.");
                }

                string filePath = istochnikDanyh.ConnectionString;

                if (!System.IO.File.Exists(filePath))
                {
                    return Results.NotFound();
                }

                string jsonContent = System.IO.File.ReadAllText(filePath);
                return Results.Content(jsonContent, "application/json");
            
        }

        [HttpPost(Name = "post_widgets")]
        public IResult PostWidget(string Nazvanie, int IdWidgetType, int VremiaObnovlenia, string json, int idDashboard)
        {
            var helper = new Helper();
            DashboardDataBaseContext context = helper.GetContext();
            if (Nazvanie.Length > 100)
            {
                return Results.Problem("Строка должна быть меньше 100 символов");
            }
            else
            {
                try
                {
                    string filePath = @"D:\need\практика\data_source_configurations\"+Nazvanie+DateTime.Now+".json";
                    File.WriteAllText(filePath, json);
                    IstochnikDanyh istochnickDanyh = new IstochnikDanyh { Nazvanie = Nazvanie + DateTime.Now, ConnectionString = filePath, IdProvider = 1};
                    context.IstochnikDanyhs.Add(istochnickDanyh);
                    context.SaveChanges();
                    Widget widget = new Widget {Nazvanie = Nazvanie, 
                        DataSozdania = DateOnly.FromDateTime(DateTime.Now), 
                        IdIstochnikDanih = istochnickDanyh.Id, 
                        IdWidgetType = IdWidgetType,
                        VremiaObnovlenia = VremiaObnovlenia};
                    context.Widgets.Add(widget);
                    context.SaveChanges();
                    DashboardWidget dashboardWidget = new DashboardWidget { IdDashboard = idDashboard, IdWidget = widget.Id};
                    context.DashboardWidgets.Add(dashboardWidget);
                    context.SaveChanges();
                    return Results.Accepted();
                }
                catch (Exception ex)
                {
                    return Results.Problem(ex.Message);
                }
            }

        }

    }
}
