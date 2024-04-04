// // import { PrismaClient } from "@prisma/client";
// // const prisma = new PrismaClient();

// // export const getServerSideProps = async ({ params }: any) => {
// //   console.log(params.linkId);

// //   const url = await prisma.link.findUnique({
// //     where: {
// //       shortUrl: params.linkId,
// //     },
// //   });
// //   console.log(url);

// //   return {
// //     redierect: {
// //       destination: url?.shortUrl,
// //     },
// //   };
// // };

// // const LinkPage = () => {
// //   return (
// //     <div>
// //       <h1 className="text-white py-5 text-center"> Hello World</h1>
// //     </div>
// //   );
// // };

// // export default LinkPage;

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const LinkPage = () => {
//   const [url, setUrl] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`/api/shortUrl=${window.location.search}`);

//       if (!response.ok) {
//         alert("Something went wrong");
//         return;
//       }

//       const data = await response.json();
//       setUrl(data?.originalUrl);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (url) {
//       router.push(url);
//     }
//   }, [url]);

//   return (
//     <div>
//       <h1 className="text-white py-5 text-center"> Hello World</h1>
//     </div>
//   );
// };

// export default LinkPage;
