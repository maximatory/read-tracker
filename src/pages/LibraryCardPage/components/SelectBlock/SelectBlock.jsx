import Select from '../Select/Select'
import { selectData } from "../../../../helpers/selectData";
import styles from './SelectedBlock.module.scss';

export default function SelectBlock() {
    return (
        <div className={styles.block}>
            <Select
                selectData={selectData.statuses}
            />
            <Select
                selectData={selectData.types}
            />
        </div>
    )
}
