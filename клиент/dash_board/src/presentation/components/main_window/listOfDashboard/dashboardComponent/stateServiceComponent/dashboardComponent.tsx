import { useEffect, useState } from 'react';
import { WidgetEntity } from '../../../../../../domain/entities/WidgetEntity';
import { WidgetsController } from '../../../../../../domain/controllers/WidgetServiceController';
import { ErrorService } from '../../../../../../domain/ErrorService';
import { ServicesEntity } from '../../../../../../domain/entities/ServicesEntity';


type Service = {
    id: number;
    name: string;
    url: string;
    status?: string;
};
  
export default function ServiceStatusDashboard({ widget }: { widget: WidgetEntity }) {
    const [services, setServices] = useState<Service[]>([]);
    const [sercicesUrls, setServicesUrls] = useState<ServicesEntity[]>([]);
    const widgetsController = new WidgetsController();
    const errorService = new ErrorService();
    const getWidgetUrls = async () => {
      try {
        setServicesUrls((await widgetsController.getUrls(widget.id)).servicesToCheck);
      } catch (error) {
        console.log(errorService.handle(error));
      }
    };
    const checkServiceStatus = async (url: string): Promise<string> => {
      try {
        const response = await fetch(url);
        return response.status === 200 ? 'Online' : 'Offline';
      } catch (error) {
        return 'Offline';
      }
    };
  
    const fetchServicesStatus = async () => {
      const updatedServices = await Promise.all(  
        sercicesUrls.map(async (service) => {
          const status = await checkServiceStatus(service.url);
          return { ...service, status }; 
        })
      );
      setServices(updatedServices);
    };
    
    useEffect(() => {
      getWidgetUrls();
      if (!services.length) {
        fetchServicesStatus();
        console.log("fss ok")
      }
      const interval = setInterval(() => {
        fetchServicesStatus();
      }, widget.vremiaObnovlenia);
      return () => clearInterval(interval);
    }, [services]);
    return (
      <div key={widget.id} className='product-card'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя Сервиса</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td style={{ color: service.status === 'Online' ? 'green' : 'red' }}>
                  {service.status || 'Проверка...'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }