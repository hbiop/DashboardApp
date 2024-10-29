using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class Razreshenium
{
    public int Id { get; set; }

    public string Naimenovanie { get; set; } = null!;

    public virtual ICollection<RoleRazreshenie> RoleRazreshenies { get; set; } = new List<RoleRazreshenie>();
}
