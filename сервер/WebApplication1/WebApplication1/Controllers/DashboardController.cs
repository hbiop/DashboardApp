using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("dashboard/[action]")]
    public class DashboardController : ControllerBase
    {
        [HttpGet(Name = "get_dashboard")]
        async public Task<List<Dashboard>> GetDashBoard(int id)
        {
            var helper = new Helper();
            var context = helper.GetContext();
            var dashboards = await (from user_dashboard in context.DashboardPolzovatels
                                        join user in context.Polzovatels on user_dashboard.IdUser equals user.Id
                                        join dashboard in context.Dashboards on user_dashboard.IdDashboard equals dashboard.Id
                                        where user.Id == id
                                        select new Dashboard
                                        {
                                            Id = dashboard.Id,
                                            Nazvanie = dashboard.Nazvanie,
                                            DataSozdania = dashboard.DataSozdania
                                        }).ToListAsync();
            return dashboards;
            
        }
        [HttpDelete]
        async public Task<IResult> DeleteDashBoard(int id)
        {
            try
            {
                var helper = new Helper();
                var context = helper.GetContext();
                var dashboard = context.Dashboards.Where(i => i.Id == id).FirstOrDefault();
                var dashboard_user = context.DashboardPolzovatels.Where(i => i.IdDashboard == dashboard.Id).ToListAsync();
                /*foreach(var du in dashboard_user)
                {
                    context.DashboardPolzovatels.Remove(du);
                }*/
                context.Dashboards.Remove(dashboard);
                await context.SaveChangesAsync();
                return Results.Accepted();
            }
            catch
            {
                return Results.BadRequest();
            }
            

        }
        [HttpPost(Name = "post_dashboard")]
        public IResult PostDashBoard(string Nazvanie, int CreatorId)
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
        [HttpGet(Name = "auth")]
        public IResult Authorization(string login, string parol)
        {
            var helper = new Helper();
            var user = helper.GetContext().Polzovatels.Where(i => i.Login == login && i.Parol == parol).FirstOrDefault();
            if (user != null)
            {
                return Results.Ok(new { id = user.Id });
            }
            else
            {
                return Results.Unauthorized();
            }

        }
    }
}
