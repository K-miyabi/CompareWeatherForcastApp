import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
export const fetchCache = "force-no-store";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const idToken = z.string().parse(searchParams.get("IdToken"));

  const url = z.string().parse(process.env.LIFF_URL);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      id_token: idToken,
      client_id: process.env.LIFF_CHANNEL_ID as string,
    }),
  };

  const fetchResponse: Response = await fetch(url, requestOptions);
  const responseData = await fetchResponse.json();
  if (responseData.error_description === "IdToken expired.")
    return NextResponse.json({
      sub: undefined,
      messsage: "IdToken is expired",
      status: 419,
    });

  //While this service does not currently use LINE to identify individual users, I plan to expand it in the future to offer user-specific features, so I am currently collecting the “sub” value for now.
  const sub = responseData.sub;

  return NextResponse.json({ sub: sub, status: 200 });
}
