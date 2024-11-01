using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.models;

public partial class Dashboard
{
    [Required]
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Nazvanie { get; set; } = null!;
    
    [Required]
    public DateOnly DataSozdania { get; set; }

    public virtual ICollection<DashboardPolzovatel> DashboardPolzovatels { get; set; } = new List<DashboardPolzovatel>();

    public virtual ICollection<DashboardWidget> DashboardWidgets { get; set; } = new List<DashboardWidget>();
}
