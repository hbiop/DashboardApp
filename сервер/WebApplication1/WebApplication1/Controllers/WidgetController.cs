using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("widgets/[action]")]
    public class WidgetController
    {
        DashboardDataBaseContext context = Helper.GetContext();
        [HttpGet(Name = "get_widgets")]
        public List<Widget> GetWidget(int id)
        {
            var widgetsList = from dashboard_widget in context.DashboardWidgets
                              join dashboard in context.Dashboards on dashboard_widget.IdWidget equals dashboard.Id
                              join widgets in context.Widgets on dashboard_widget.IdDashboard equals widgets.Id
                              where dashboard.Id == id
                              select new Widget
                              {
                                  Id = widgets.Id,
                                  Nazvanie = widgets.Nazvanie,
                                  DataSozdania = widgets.DataSozdania,
                                  VremiaObnovlenia = widgets.VremiaObnovlenia,
                                  IdWidgetType = widgets.IdWidgetType,
                                  IdIstochnikDanih = widgets.IdIstochnikDanih
                              };
            return widgetsList.ToList();
        }
        [HttpGet]
        public IResult GetIstochnickDanyh(int id)
        { 
            int idIstochnikDanyh = context.Widgets.Where(i => i.Id == id).FirstOrDefault().IdIstochnikDanih;
            string filePath = context.IstochnikDanyhs.Where(i => i.Id == idIstochnikDanyh).FirstOrDefault().ConnectionString;
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
        [HttpPost(Name = "post_widgets_q")]
        public IResult PostIstochnickDanyh(string jsonString)
        {
            string filePath = @"D:\need\практика\data_source_configurations\configuration2.json";
            File.WriteAllText(filePath, jsonString);
            Console.WriteLine("JSON файл успешно сохранён!");
            return Results.StatusCode(200);
        }
    }
}
