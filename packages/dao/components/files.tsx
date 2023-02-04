"use client";

import React from "react";
import { UserFile } from "@analytics/shared/types";
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@analytics/ui";

const Files: React.FC<{
  files: UserFile[];
}> = ({ files }) => {
  return (
    <div className="mt-4">
      <div className="shadow rounded-lg overflow-auto max-h-[540px]">
        {files.map((file) => (
          <Accordion key={file.tokenId} className="">
            <AccordionButton className="">
              <div className="w-full flex">
                <b className="w-1/4 text-left pl-5">
                  {new Date(file.timestamp).toLocaleDateString()}
                </b>
                <span className="w-2/4 mx-6">
                  Hosts: <b>{file.eventsCount.length}</b>
                </span>
                <span className="w-1/4">
                  Events:{" "}
                  <b>
                    {file.eventsCount.reduce(
                      (acc, curr) => (acc += curr.count),
                      0
                    )}
                  </b>
                </span>
              </div>
            </AccordionButton>
            <AccordionPanel className="bg-lighter">
              <Table>
                <TableBody className="max-h-[200px]">
                  {file.eventsCount.map((row, i) => (
                    <TableRow i={i} key={row.hostName}>
                      <TableCell className="w-3/4">
                        <a
                          href={`http://${row.hostName}`}
                          className="underline block whitespace-nowrap text-ellipsis overflow-hidden w-full"
                        >
                          {row.hostName.split("www.").pop()}
                        </a>
                      </TableCell>
                      <TableCell>{row.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionPanel>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Files;