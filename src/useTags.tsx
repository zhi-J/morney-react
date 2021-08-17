import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}
]
const useTags = ()=>{ //封装一个自定义 hook
  const [tags, setTags] = useState<{id:number; name:string}[]>(defaultTags)
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id: number) => {
    let res = -1
    for(let i=0; i< tags.length; i++){
      if(tags[i].id === id){
        res = i
        break
      }
    }
    return res
  }
  const updateTag = (id:number, obj:{name:string}) =>{
    // 获取你要改的 tag 的下标
    const index = findTagIndex(id)
    // 深拷贝 tags
    const tagsClone = JSON.parse(JSON.stringify(tags))
    // 把 tagsClone 的第 index 删掉， 换成新的
    tagsClone.splice(index, 1, {id:id, name: obj.name})
    setTags(tagsClone)
  }
  return{tags, setTags, findTag,updateTag, findTagIndex}
}

export {useTags}