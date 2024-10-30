using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class Widget
{
    public int Id { get; set; }

    public string Nazvanie { get; set; } = null!;

    public DateOnly DataSozdania { get; set; }

    public int IdIstochnikDanih { get; set; }

    public int IdWidgetType { get; set; }

    public int VremiaObnovlenia { get; set; }

    public virtual ICollection<DashboardWidget> DashboardWidgets { get; set; } = new List<DashboardWidget>();

    public virtual IstochnikDanyh IdIstochnikDanihNavigation { get; set; } = null!;

    public virtual TipWidgetum IdWidgetTypeNavigation { get; set; } = null!;
}
