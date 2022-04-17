import styles from './ProjectForm.module.css';

import Inputs from '../form/Inputs';
import Select from '../form/Select';
import Submit from '../form/Submit';
const ProjectForm = ({btnText}) => {
    return (
        <form className={styles.form_container}>
            <div>
                <Inputs 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"/>
           </div>
            <div>
                <Inputs 
                    type="number"
                    text="Orçamento do projeto"
                    name="budget"
                    placeholder="Insira o orçamento total" required/>
            </div>
            <div>
                <Select 
                name="category_id"
                text="Selecione a categoria"/>
            </div>
            <div>
                <Submit 
                text={btnText}/>
            </div>
        </form>
    )
}
export default ProjectForm;