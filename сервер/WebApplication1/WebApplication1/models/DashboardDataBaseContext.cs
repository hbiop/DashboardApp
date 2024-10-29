using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.models;

public partial class DashboardDataBaseContext : DbContext
{
    public DashboardDataBaseContext()
    {
    }

    public DashboardDataBaseContext(DbContextOptions<DashboardDataBaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Dashboard> Dashboards { get; set; }

    public virtual DbSet<DashboardPolzovatel> DashboardPolzovatels { get; set; }

    public virtual DbSet<DashboardWidget> DashboardWidgets { get; set; }

    public virtual DbSet<IstochnikDanyh> IstochnikDanyhs { get; set; }

    public virtual DbSet<Polzovatel> Polzovatels { get; set; }

    public virtual DbSet<Razreshenium> Razreshenia { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<RoleRazreshenie> RoleRazreshenies { get; set; }

    public virtual DbSet<TipWidgetum> TipWidgeta { get; set; }

    public virtual DbSet<Widget> Widgets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=dashboard_data_base;Username=postgres;Password=password");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dashboard>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("dashboard_pkey");

            entity.ToTable("dashboard");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.DataSozdania).HasColumnName("data_sozdania");
            entity.Property(e => e.Nazvanie)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("nazvanie");
        });

        modelBuilder.Entity<DashboardPolzovatel>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("dashboard_polzovatel_pkey");

            entity.ToTable("dashboard_polzovatel");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.IdDashboard).HasColumnName("id_dashboard");
            entity.Property(e => e.IdUser).HasColumnName("id_user");

            entity.HasOne(d => d.IdDashboardNavigation).WithMany(p => p.DashboardPolzovatels)
                .HasForeignKey(d => d.IdDashboard)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("dashboard_fk");

            entity.HasOne(d => d.IdUserNavigation).WithMany(p => p.DashboardPolzovatels)
                .HasForeignKey(d => d.IdUser)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user_fk");
        });

        modelBuilder.Entity<DashboardWidget>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("dashboard_widget_pkey");

            entity.ToTable("dashboard_widget");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.IdDashboard).HasColumnName("id_dashboard");
            entity.Property(e => e.IdWidget).HasColumnName("id_widget");

            entity.HasOne(d => d.IdDashboardNavigation).WithMany(p => p.DashboardWidgets)
                .HasForeignKey(d => d.IdDashboard)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("dashboard_fk");

            entity.HasOne(d => d.IdWidgetNavigation).WithMany(p => p.DashboardWidgets)
                .HasForeignKey(d => d.IdWidget)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("widget_fk");
        });

        modelBuilder.Entity<IstochnikDanyh>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("istochnik_danyh_pkey");

            entity.ToTable("istochnik_danyh");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.ConnectionString)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("connection_string");
            entity.Property(e => e.Nazvanie)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("nazvanie");
        });

        modelBuilder.Entity<Polzovatel>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Polzovatel_pkey");

            entity.ToTable("polzovatel");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("email");
            entity.Property(e => e.Familia)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("familia");
            entity.Property(e => e.IdRole).HasColumnName("id_role");
            entity.Property(e => e.Imia)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("imia");
            entity.Property(e => e.Login)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("login");
            entity.Property(e => e.Otchestvo)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("otchestvo");
            entity.Property(e => e.Parol)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("parol");

            entity.HasOne(d => d.IdRoleNavigation).WithMany(p => p.Polzovatels)
                .HasForeignKey(d => d.IdRole)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("role_fk");
        });

        modelBuilder.Entity<Razreshenium>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Razreshenia_pkey");

            entity.ToTable("razreshenia");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.Naimenovanie)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("naimenovanie");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Role_pkey");

            entity.ToTable("role");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.Naimenovanie)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("naimenovanie");
        });

        modelBuilder.Entity<RoleRazreshenie>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("role_razreshenie_pkey");

            entity.ToTable("role_razreshenie");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.IdRazreshenia).HasColumnName("id_razreshenia");
            entity.Property(e => e.IdRole).HasColumnName("id_role");

            entity.HasOne(d => d.IdRazresheniaNavigation).WithMany(p => p.RoleRazreshenies)
                .HasForeignKey(d => d.IdRazreshenia)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("razreshenia_fk");

            entity.HasOne(d => d.IdRoleNavigation).WithMany(p => p.RoleRazreshenies)
                .HasForeignKey(d => d.IdRole)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("role_fk");
        });

        modelBuilder.Entity<TipWidgetum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("tip_widgeta_pkey");

            entity.ToTable("tip_widgeta");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.Nazvanie)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("nazvanie");
        });

        modelBuilder.Entity<Widget>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("widget_pkey");

            entity.ToTable("widget");

            entity.Property(e => e.Id)
                .UseIdentityAlwaysColumn()
                .HasIdentityOptions(null, null, null, 999999999L, null, null)
                .HasColumnName("id");
            entity.Property(e => e.DataSozdania).HasColumnName("data_sozdania");
            entity.Property(e => e.IdIstochnikDanih).HasColumnName("id_istochnik_danih");
            entity.Property(e => e.IdWidgetType).HasColumnName("id_widget_type");
            entity.Property(e => e.Nazvanie)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("nazvanie");

            entity.HasOne(d => d.IdIstochnikDanihNavigation).WithMany(p => p.Widgets)
                .HasForeignKey(d => d.IdIstochnikDanih)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("istochnik_danyh_fk");

            entity.HasOne(d => d.IdWidgetTypeNavigation).WithMany(p => p.Widgets)
                .HasForeignKey(d => d.IdWidgetType)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tip_widgeta_fk");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
