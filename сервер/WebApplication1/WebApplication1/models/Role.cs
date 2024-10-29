using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class Role
{
    public int Id { get; set; }

    public string Naimenovanie { get; set; } = null!;

    public virtual ICollection<Polzovatel> Polzovatels { get; set; } = new List<Polzovatel>();

    public virtual ICollection<RoleRazreshenie> RoleRazreshenies { get; set; } = new List<RoleRazreshenie>();
}
