using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class Polzovatel
{
    public int Id { get; set; }

    public string Imia { get; set; } = null!;

    public string Familia { get; set; } = null!;

    public string Otchestvo { get; set; } = null!;

    public string Login { get; set; } = null!;

    public string Parol { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int IdRole { get; set; }

    public virtual ICollection<DashboardPolzovatel> DashboardPolzovatels { get; set; } = new List<DashboardPolzovatel>();

    public virtual Role IdRoleNavigation { get; set; } = null!;
}
