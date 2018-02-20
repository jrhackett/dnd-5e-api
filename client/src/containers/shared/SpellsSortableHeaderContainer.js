import { connect } from 'react-redux'
import { updateSpellsSort } from '../../actions/spells'
import SortableHeader from '../../components/shared/SortableHeader'

const mapStateToProps = state => ({
  headers: ['name', 'level', 'school', 'classes'],
  sortOrder: state.spells.sortOrder,
  sortKey: state.spells.sortKey
})

const mapDispatchToProps = dispatch => ({
  onClick: (key, order, active) => {
    if(active) {
      dispatch(updateSpellsSort(key, order === 'asc' ? 'des' : 'asc'))
    } else {
      dispatch(updateSpellsSort(key, 'asc'))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableHeader)
