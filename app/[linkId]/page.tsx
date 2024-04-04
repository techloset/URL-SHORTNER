import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const generateStaticParams = async ({ params }: any) => {
  console.log(params.linkId);

  const url = await prisma.link.findUnique({
    where: {
      shortUrl: params.linkId,
      longUrl: params.linkId,
      id: params.linkId,
    },
  });
  console.log(url);

  return {
    redierect: {
      destination: url?.shortUrl,
    },
  };
};

const LinkPage = () => {
  return (
    <div>
      <h1 className="text-white py-5 text-center"> Hello World</h1>
    </div>
  );
};

export default LinkPage;
