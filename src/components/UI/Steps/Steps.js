import { Steps as AntSteps } from "antd";

const Steps = ({ current, steps }) => {
  return (
    <AntSteps progressDot current={current} size="small">
      {steps?.map((item) => (
        <AntSteps.Step key={item} title={item} />
      ))}
    </AntSteps>
  );
};

export default Steps;
