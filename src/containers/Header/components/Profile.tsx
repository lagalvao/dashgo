import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo</Text>
          <Text color="gray.300" fontSize="small">
            leogalvao49@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Leo Galvão" />
    </Flex>
  );
}
