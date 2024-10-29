using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class RoleRazreshenie
{
    public int Id { get; set; }

    public int IdRole { get; set; }

    public int IdRazreshenia { get; set; }

    public virtual Razreshenium IdRazresheniaNavigation { get; set; } = null!;

    public virtual Role IdRoleNavigation { get; set; } = null!;
}
