using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class IstochnikDanyh
{
    public int Id { get; set; }

    public string Nazvanie { get; set; } = null!;

    public string ConnectionString { get; set; } = null!;

    public int IdProvider { get; set; }

    public virtual ProvaiderDanyh IdProviderNavigation { get; set; } = null!;

    public virtual ICollection<Widget> Widgets { get; set; } = new List<Widget>();
}
