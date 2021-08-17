import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Center} from '../components/Center';

type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const Input = styled.div`
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }  
`;
const Wrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const TagEdit: React.FunctionComponent = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? <div><Wrapper>
        <Input>
          <span>标签名</span>
          <input type="text" placeholder="标签名" value={tag.name} onChange={(e) => {
            updateTag(tag.id, {name: e.target.value});
          }}/>
        </Input>
      </Wrapper>
        <Center>
          <Button onClick={() => {
            deleteTag(tag.id);
          }}>删除标签</Button>
        </Center></div> : <Center>tag 不存在</Center>}

    </Layout>
  );
};
export {TagEdit};