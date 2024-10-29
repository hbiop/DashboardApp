using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class DashboardWidget
{
    public int Id { get; set; }

    public int IdWidget { get; set; }

    public int IdDashboard { get; set; }

    public virtual Dashboard IdDashboardNavigation { get; set; } = null!;

    public virtual Widget IdWidgetNavigation { get; set; } = null!;
}
