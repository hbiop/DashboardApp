import React, { useEffect, useState } from 'react';


interface Service {
    id: number;
    name: string;
    status: string;
}

const servicesToCheck = [
    { id: 1, name: 'Service 1', url: 'https://api.chucknorris.io/jokes/random' },
    { id: 2, name: 'Service 2', url: 'https://api.service2.com/status' },
    { id: 3, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 4, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 5, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 6, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 7, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 8, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 9, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 10, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 11, name: 'Service 3', url: 'https://api.service3.com/status' },
    { id: 12, name: 'Service 3', url: 'https://api.chucknorris.io/jokes/random' },
    { id: 13, name: 'Service 3', url: 'https://api.chucknorris.io/jokes/random' },
    { id: 14, name: 'Service 3', url: 'https://api.chucknorris.io/jokes/random' },
    { id: 15, name: 'Service 3', url: 'https://api.chucknorris.io/jokes/random' },
    { id: 16, name: 'Service 3', url: 'https://api.chucknorris.io/jokes/random' },
];

const ServiceStatusDashboard: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
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
            servicesToCheck.map(async (service) => {
                const status = await checkServiceStatus(service.url);
                return { ...service, status };
            })
        );
        setServices(updatedServices);
    };

    useEffect(() => {
        fetchServicesStatus();
        const interval = setInterval(fetchServicesStatus, 30000); // обновление каждые 30 секунд
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='product-card'>
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
                                {service.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceStatusDashboard;