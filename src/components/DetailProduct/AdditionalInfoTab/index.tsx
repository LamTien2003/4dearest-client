import {
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react";

interface AdditionalInfoTabProps {
  data: Object;
}

const AdditionalInfoTab = ({ data }: AdditionalInfoTabProps) => {
  return (
    <TableContainer marginTop="2rem">
      <Table width="100%" variant="striped" colorScheme="blackAlpha" size="lg">
        <TableCaption placement="top" fontSize={18}>
          Additional Information
        </TableCaption>
        <Tbody>
          {Object.entries(data).map(([key, value]) => (
            <Tr key={key}>
              <Td style={{ width: "26.6%" }}>{key.toUpperCase()}</Td>
              <Td style={{ width: "67.4%" }}>{value}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AdditionalInfoTab;
