using Microsoft.AspNetCore.Mvc;
using WebApplication1.models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("dashboard/[action]")]
    public class DashboardController : ControllerBase
    {
        DashboardDataBaseContext context = Helper.GetContext();
        [HttpGet(Name = "get_dashboard")]
        public List<Dashboard> GetDashBoard(int id)
        {
            var dashboards = from user_dashboard in context.DashboardPolzovatels
                             join user in context.Polzovatels on user_dashboard.IdUser equals user.Id
                             join dashboard in context.Dashboards on user_dashboard.IdDashboard equals dashboard.Id
                             where user.Id == id
                             select new Dashboard
                             {
                                 Id = dashboard.Id,
                                 Nazvanie = dashboard.Nazvanie,
                                 DataSozdania = dashboard.DataSozdania
                             };
            return dashboards.ToList();
        }
        [HttpPost(Name = "post_dashboard")]
        public IResult PostDashBoard(string Nazvanie, int CreatorId)
        {
            if(Nazvanie.Length > 100)
            {
                return Results.Problem("Строка должна быть меньше 100 символов");
            }
            else
            {
                try
                {
                    Dashboard dashboard = new Dashboard { Nazvanie = Nazvanie, DataSozdania = DateOnly.FromDateTime(DateTime.Now) };
                    context.Dashboards.Add(dashboard);
                    context.SaveChanges();
                    context.DashboardPolzovatels.Add(new DashboardPolzovatel { IdUser = CreatorId, IdDashboard = dashboard.Id });
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
