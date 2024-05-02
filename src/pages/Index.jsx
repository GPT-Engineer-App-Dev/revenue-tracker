import { Box, Flex, Heading, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useMediaQuery } from "@chakra-ui/react";
import { FaBusinessTime } from "react-icons/fa";

const Index = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const stats = [
    { label: 'Sales', value: '1,024', trend: 'increase', trendValue: '23.4%' },
    { label: 'Revenue', value: '$50K', trend: 'increase', trendValue: '15.2%' },
    { label: 'Expenses', value: '$20K', trend: 'decrease', trendValue: '5.1%' },
    { label: 'New Customers', value: '89', trend: 'increase', trendValue: '44.1%' }
  ];

  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <FaBusinessTime size={isLargerThan1280 ? '3em' : '2em'} />
        <Heading as="h1" size="xl" mt={3}>Business Dashboard</Heading>
        <Text fontSize="lg" mt={2}>Key Metrics Overview</Text>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
        {stats.map(stat => (
          <Stat p={5} boxShadow="md" borderRadius="md">
            <StatLabel>{stat.label}</StatLabel>
            <StatNumber>{stat.value}</StatNumber>
            <StatHelpText>
              <StatArrow type={stat.trend === 'increase' ? 'increase' : 'decrease'} />
              {stat.trendValue}
            </StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;