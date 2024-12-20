﻿using System;
using System.Collections.Generic;

namespace WebApplication1.models;

public partial class TipWidgetum
{
    public int Id { get; set; }

    public string Nazvanie { get; set; } = null!;

    public virtual ICollection<Widget> Widgets { get; set; } = new List<Widget>();
}
