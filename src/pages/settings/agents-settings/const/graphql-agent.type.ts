type TAgentOutput = {
  agentLastActiveTime: string;
  agentStatus: 'active' | 'inactive';
  id: string;
  title: string;
};

type TAgentsCollection = {
  agents: {
    collectionItems: TAgentOutput[];
  };
};

type TAgentsCountData = {
  agents: {
    totalCount: number;
  };
};

export type { TAgentOutput, TAgentsCollection, TAgentsCountData };
