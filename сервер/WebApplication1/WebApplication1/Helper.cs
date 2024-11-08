using WebApplication1.models;

namespace WebApplication1
{
    public class Helper
    {
        private static DashboardDataBaseContext context;
        public DashboardDataBaseContext GetContext()
        {
            if(context == null)
            {
                context = new DashboardDataBaseContext();
            }
            return context;
        }
    }
}
