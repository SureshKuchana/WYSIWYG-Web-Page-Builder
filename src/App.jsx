import './App.css'
import Card from './components/Card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuillEditor from './components/Quill';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>        
     <QuillEditor />     
     <Card />    
    </DndProvider>
  )
}

export default App
