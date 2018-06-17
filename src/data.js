// @flow

const data = {
  me: {
    id: '2014',
    name: 'Renato Benkendorf',
    email: 'renatobenkendorfs@gmail.com',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/14860216?v=4',
  },
  chat: {
    '1024': {
      id: '1024',
      owner: {
        id: '2014',
        name: 'Renato Benkendorf',
        email: 'renatobenkendorfs@gmail.com',
        avatarUrl: 'https://avatars3.githubusercontent.com/u/14860216?v=4',
      },
      conversations: {
        '1000': {
          id: '1000',
          unreachedMessagesCount: 1,
          user: {
            id: '2013',
            name: 'Luck John',
            email: 'luck.john@gmail.com',
            avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
          },
          messages: {
            pageInfo: {
              startCursor: '0',
              endCursor: '5',
              hasNextPage: true,
              hasPreviousPage: false,
            },
            edges: [
              {
                cursor: '0',
                node: {
                  id: '102392',
                  text: 'Im Luck, lets talk?',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2013',
                    name: 'Luck John',
                    email: 'luck.john@gmail.com',
                    avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
                  },
                },
              },
              {
                cursor: '1',
                node: {
                  id: '102393',
                  text: 'hey man',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2014',
                    name: 'Renato Benkendorf',
                    email: 'renatobenkendorfs@gmail.com',
                    avatarUrl: 'https://avatars3.githubusercontent.com/u/14860216?v=4',
                  },
                },
              },
            ],
          },
        },
        '1001': {
          id: '1001',
          unreachedMessagesCount: 1,
          user: {
            id: '2012',
            name: 'Juquinha',
            email: 'juquinha@gmail.com',
            avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
          },
          messages: {
            pageInfo: {
              startCursor: '0',
              endCursor: '5',
              hasNextPage: true,
              hasPreviousPage: false,
            },
            edges: [
              {
                cursor: '0',
                node: {
                  id: '9128392',
                  text: 'Im Juqinha',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2012',
                    name: 'Juquinha',
                    email: 'juquinha@gmail.com',
                    avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
                  },
                },
              },
              {
                cursor: '1',
                node: {
                  id: '34937',
                  text: 'how are u?',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2012',
                    name: 'Juquinha',
                    email: 'juquinha@gmail.com',
                    avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
                  },
                },
              },
            ],
          },
        },
        '1002': {
          id: '1002',
          unreachedMessagesCount: 0,
          user: {
            id: '2011',
            name: 'Brendon James',
            email: 'brendon.james@gmail.com',
            avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
          },
          messages: {
            pageInfo: {
              startCursor: '0',
              endCursor: '5',
              hasNextPage: true,
              hasPreviousPage: false,
            },
            edges: [
              {
                cursor: '0',
                node: {
                  id: '12039120',
                  text: 'Hi, I wanna kill you!',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2011',
                    name: 'Brendon James',
                    email: 'brendon.james@gmail.com',
                    avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
                  },
                },
              },
            ],
          },
        },
        '1003': {
          id: '1003',
          unreachedMessagesCount: 1,
          user: {
            id: '2010',
            name: 'Bill Bon',
            email: 'bill.bon@gmail.com',
            avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
          },
          messages: {
            pageInfo: {
              startCursor: '0',
              endCursor: '5',
              hasNextPage: true,
              hasPreviousPage: false,
            },
            edges: [
              {
                cursor: '0',
                node: {
                  id: '3943849',
                  text: 'Hi!',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2010',
                    name: 'Bill Bon',
                    email: 'bill.bon@gmail.com',
                    avatarUrl: 'https://i.imgur.com/I80W1Q0.png',
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};

export type User = {
  id: string,
  name: string,
  email: string,
  avatarUrl: string,
};

export type Messages = {
  pageInfo: {
    startCursor: string,
    endCursor: string,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
  },
  edges: [
    {
      cursor: string,
      node: {
        id: string,
        text: string,
        author: User,
        createdAt: string,
      },
    },
  ],
};

export type Conversation = {
  id: string,
  unreachedMessagesCount: number,
  user: User,
  messages: Messages,
};

export type Chat = {
  conversations: {
    [id: string]: Conversation,
  },
};

export type Data = {
  chat: {
    [id: string]: Chat,
  },
};

export default data;
