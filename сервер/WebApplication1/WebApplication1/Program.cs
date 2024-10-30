using Microsoft.EntityFrameworkCore;
using WebApplication1;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("null");
                          policy.WithOrigins("http://localhost:5173");
                      });
});

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.MapGet("/authorization", (string login, string parol) =>
{
    var user = Helper.GetContext().Polzovatels.Where(i => i.Login == login && i.Parol == parol).FirstOrDefault();
    if(user != null)
    {
        return Results.Ok(new {id = user.Id});
    }
    else
    {
        return Results.Unauthorized();
    }
});

app.MapGet("/get_dashboards", (int id) =>
{
    var db = Helper.GetContext();
    var dashboards = from user_dashboard in db.DashboardPolzovatels
            join user in db.Polzovatels on user_dashboard.IdUser equals user.Id
            join dashboard in db.Dashboards on user_dashboard.IdDashboard equals dashboard.Id
            where user.Id == id
            select new
            {
                Id = dashboard.Id,
                Nazvanie = dashboard.Nazvanie,
                DataSozdania = dashboard.DataSozdania
            };
    return dashboards.ToList();
});

app.MapGet("/get_widgets", (int id) =>
{
    var db = Helper.GetContext();
    var widgetsList = from dashboard_widget in db.DashboardWidgets
                     join dashboard in db.Dashboards on dashboard_widget.IdWidget equals dashboard.Id
                     join widgets in db.Widgets on dashboard_widget.IdDashboard equals widgets.Id
                     where dashboard.Id == id
                     select new
                     {
                         Id = widgets.Id,
                         Nazvanie = widgets.Nazvanie,
                         DataSozdania = widgets.DataSozdania,
                         VremiaObnovlenia = widgets.VremiaObnovlenia,
                         IdWidgetType = widgets.IdWidgetType,
                         IdIstochnikDanyh = widgets.IdIstochnikDanih
                     };
    return widgetsList.ToList();
});
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(MyAllowSpecificOrigins);

app.MapControllers();

app.Run();
