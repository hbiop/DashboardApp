using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class DashboardPolzovatel
{
    public int Id { get; set; }

    public int IdUser { get; set; }

    public int IdDashboard { get; set; }

    public virtual Dashboard IdDashboardNavigation { get; set; } = null!;

    public virtual Polzovatel IdUserNavigation { get; set; } = null!;
}
