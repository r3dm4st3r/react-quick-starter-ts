import { Text } from "@mantine/core";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="text-center">
            <Text component="h1" fz={40} fw={600}>
              Something went wrong
            </Text>
            <Text fz={22} maw={800} mx="auto" mt={20}>
              The page or resource you're trying to access has been removed or
              you don't have sufficient permission to access.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
