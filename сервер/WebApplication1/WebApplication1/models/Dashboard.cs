using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class Dashboard
{
    public int Id { get; set; }

    public string Nazvanie { get; set; } = null!;

    public DateOnly DataSozdania { get; set; }

    public virtual ICollection<DashboardPolzovatel> DashboardPolzovatels { get; set; } = new List<DashboardPolzovatel>();

    public virtual ICollection<DashboardWidget> DashboardWidgets { get; set; } = new List<DashboardWidget>();
}
