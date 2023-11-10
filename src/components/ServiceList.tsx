import React, { useState, useEffect } from 'react';
import { Service } from "../interfaces/Service";
import { AlertTriangle, CheckCircle, AlertOctagon, AlertCircle } from 'react-feather';
import { Tooltip } from 'react-tooltip'

interface ServiceListProps {
    services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (services.length === 0) {
                    setError('Ocorreu um erro ao carregar os serviços. Por favor, tente novamente mais tarde.');
                }
            } catch (error) {
                setError(error as string);
            }
        };
        fetchData();
    }, [services]);

    if (error) {
        return (
            <div className="container flex flex-col items-center my-8">
                <p className="text-red-500 text-xl font-semibold">{error}</p>
            </div>
        );
    }

    return (
        <div className="container flex flex-col items-center gap-16 mx-auto my-8">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-xl shadow-xl">
                        <div
                            data-tooltip-content={getServiceInfo(service.status).tooltipText}
                            data-tooltip-id={`tooltip-${service.id}`}
                            data-testid={`tooltip-${service.id}`}
                            data-tooltip-place="top"
                            className={`flex items-center gap-3 ${getServiceInfo(service.status).colorClass}`}>
                            {getServiceInfo(service.status).icon}
                            <p className="text-2xl text-gray-500">{service.service}</p>
                        </div>
                        <Tooltip id={`tooltip-${service.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const getServiceInfo = (status: string) => {
    let colorClass, icon, tooltipText;

    switch (status) {
        case "up":
            colorClass = "text-green-500";
            icon = <CheckCircle className="h-8 w-8" />;
            tooltipText = "Serviço está funcionando";
            break;
        case "warning":
            colorClass = "text-yellow-500";
            icon = <AlertTriangle className="h-8 w-8" />;
            tooltipText = "Serviço apresenta lentidão";
            break;
        case "error":
            colorClass = "text-red-500";
            icon = <AlertOctagon className="h-8 w-8" />;
            tooltipText = "Serviço fora do ar";
            break;
        default:
            colorClass = "text-gray-900";
            icon = <AlertCircle className="h-8 w-8" />;
            tooltipText = "Status desconhecido.";
    }

    return { colorClass, icon, tooltipText };
};

export default ServiceList;
