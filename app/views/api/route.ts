import axios from "axios";

export async function POST(req: Request) {
    let visitor: any = await req.json();

    const emailData = {
        from: {
            email: "info@h1zqeel.com",
        },
        to: [
            {
                email: "admin@h1zqeel.com",
            },
        ],
        subject: "New visitor on h1zqeel.com",
        personalization: [
            {
                email: "admin@h1zqeel.com",
                data: {
                    to_name: "Hizqeel Javed",
                    viewer_ip: visitor.ip,
                    viewer_isp: visitor.org,
                    viewer_loc: visitor.loc,
                    viewer_city: visitor.city,
                    viewer_name: visitor.hostname,
                    viewer_region: visitor.region,
                    viewer_country: visitor.country,
                    viewer_timezone: visitor.timezone,
                },
            },
        ],
        template_id: "z86org8n751gew13",
    };

    await axios({
        method: "post",
        url: "https://api.mailersend.com/v1/email",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                `Bearer ${process.env.MAILERSEND_API_KEY}`,
        },
        data: emailData,
    })
	.then((response) => {
		return Response.json({ res: "ok" });

	})
	.catch((error) => {
		return Response.json({ res: "ok" }, { status: 500 });
	});

	return Response.json({ res: "ok" });
}
