using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class ProvaiderDanyh
{
    public int Id { get; set; }

    public string Nazvanie { get; set; } = null!;

    public virtual ICollection<IstochnikDanyh> IstochnikDanyhs { get; set; } = new List<IstochnikDanyh>();
}
