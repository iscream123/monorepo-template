import { Button } from '@monorepo/ui'
import {add} from '@monorepo/utils'

const Home = () => {
  return (<div>
    <h1>测试UI组件</h1>
    <Button />
    <h1>测试utils组件</h1>
    1 + 1 = {add(1,1)}
  </div> );
}
 
export default Home;
