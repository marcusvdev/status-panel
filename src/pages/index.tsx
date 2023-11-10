import React from 'react';
import ServiceList from "../components/ServiceList";
import { GetStaticProps } from "next";
import { Service } from "../interfaces/Service";
import servicesData from "../data/services.json";
import 'react-tooltip/dist/react-tooltip.css'

const Home: React.FC<{ services: Service[] }> = ({ services }) => {
	return (
		<div className="py-24 sm:py-8">
			<div className="mx-auto text-center">
				<h2 className="text-4xl font-semibold leading-7 text-green-600">Painel de Serviços</h2>
				<p className="text-2xl my-4">Consulte a disponibilidade de cada serviço</p>
			</div>
			<ServiceList services={services} />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			services: servicesData,
		},
	};
};

export default Home;
