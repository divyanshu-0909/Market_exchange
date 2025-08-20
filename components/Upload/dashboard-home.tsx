import { getUserUploads } from "@/action/getUserUploads";
import { NEXT_AUTH } from "@/lib/auth";
import { formatDistanceToNow } from "date-fns";
import { getServerSession } from "next-auth";
import Link from "next/link";
import UploadingFile from "../LandingPage/UploadingFile";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const DashboardHome = async () => {
  const { user } = await getServerSession(NEXT_AUTH);
  let data = (await getUserUploads(user.id)) || [];
  data = data?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const convertToRelativeTime = (createdAt: Date) => {
    const now = new Date();
    const distance = formatDistanceToNow(createdAt, { addSuffix: true });
    return distance;
  };

  return (
    <>
      {data && data.length > 0 ? (
        <Table className="mx-4 overflow-scroll">
          <TableCaption>A list of your recent Upload.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">Created At</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data.map((data, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{data.name}</TableCell>
                  <TableCell className="font-medium">
                    {convertToRelativeTime(data.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Link href={`/dashboard/${data.id}`}>
                      <Button className="px-4 py-3">View</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        <div className=" h-full flex justify-center ">
          {" "}
          <UploadingFile show={true} />{" "}
        </div>
      )}
    </>
  );
};

export default DashboardHome;
