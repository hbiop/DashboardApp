using System;
using System.Collections.Generic;
using WebApplication1.models;

namespace WebApplication1;

public partial class Dashboard
{
    public int Id { get; set; }

    public string Nazvanie { get; set; } = null!;

    public DateOnly DataSozdania { get; set; }

    public virtual ICollection<DashboardPolzovatel> DashboardPolzovatels { get; set; } = new List<DashboardPolzovatel>();

    public virtual ICollection<DashboardWidget> DashboardWidgets { get; set; } = new List<DashboardWidget>();
}
