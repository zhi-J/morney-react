import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../useTags';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  background: #FFFFFF;
  padding: 12px 16px;
  >ol{
  margin: 0 -12px;
    >li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background:#F0C48A ;
      }
    }
  }
  >button{
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props = {
  value: number[],
  onChange: (value: number[]) => void
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新的标签名为');
    if (tagName !== null) {
      setTags([...tags, {id: Math.random(), name: tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)}
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};