"use client";

import axios from "axios";
import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	const handleView = async () => {
		const visitor = await axios.get('https://ipinfo.io');
		await axios.post('/views/project/api', {...visitor.data, project_name: slug});
	}
	useEffect(() => {
		fetch("/api/incr", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ slug }),
		});

		handleView()
	}, [slug]);

	return null;
};
