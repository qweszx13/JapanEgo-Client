import {useSelector} from 'react-redux';
import VocabularyNavCard from '../VocabularyNavCard/VocabularyNavCard';
import VocaSectionCard from '../VocaSectionCard/VocaSectionCard';

export default function VocabularySection() {

    const listData = useSelector((state) => {
        return state.stateVocaListInfo
    })
    return (
        <div className="h-full w-full overflow-auto animate-smoothy">
            {
                listData.list === "VOCA_MAIN" //메인을 가르키고 있는가?
                    ? <VocabularyNavCard></VocabularyNavCard>
                    : <VocaSectionCard></VocaSectionCard>
            }
        </div>

    )
}