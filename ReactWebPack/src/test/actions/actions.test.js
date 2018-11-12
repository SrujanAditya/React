import {setSearchText,setSearchBy,setResultsFound,fetchAndSetData,updateMovies,fetchAndSetMovieData} from '../../js/actions/Actions';
import C from '../../js/constants/index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('setSearchText action', () => {
  it('should set the searchText', () => {
    const text = 'kill'
    const expectedAction = {
      type: C.SET_SEARCHTEXT,
      payload:text
    }
    expect(setSearchText(text)).toEqual(expectedAction)
  })
})

describe('setSearchBy action', () => {
    it('should set the searchBy', () => {
      const text = 'title'
      const expectedAction = {
        type: C.SET_SEARCHBY,
        payload:text
      }
      expect(setSearchBy(text)).toEqual(expectedAction)
    })
})

describe('setResultsFound action', () => {
    it('should set the searchBy', () => {
      const text = '100'
      const expectedAction = {
        type: C.SET_RESULTSFOUND,
        payload:text
      }
      expect(setResultsFound(text)).toEqual(expectedAction)
    })
})

describe('fetch movies actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    it('creates FETCH_Movies when fetching movies has been done', () => {
        fetchMock.getOnce('*', {
            data: ['do something','test'],
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: C.FETCH_SET_DATA, payload: ['do something','test'] },
            { type: C.SET_RESULTSFOUND, payload: 2 },
            { type: C.SET_SEARCHTEXT, payload: 'kill' },
            { type: C.SET_SEARCHBY, payload: 'title' }
        ]
        const store = mockStore({ state: [] })

        return store.dispatch(fetchAndSetData("kill","title")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
    
    it('On a failed fetch movies data request', () => {
        fetchMock.getOnce('*', {} )

        const expectedActions = [
            { type: C.FETCH_SET_DATA, payload: undefined }
        ]

        const store = mockStore({ state: [] })

        return store.dispatch(fetchAndSetData("kill","title")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    }) 
})

describe('update movies actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    it('creates Update_Movies when fetching movies has been done', () => {
        fetchMock.getOnce('*', {
            data: ['do something','test'],
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: C.FETCH_SET_DATA, payload: ['do something','test'] },
            { type: C.SET_RESULTSFOUND, payload: 2 }
        ]
        const store = mockStore({ state: [] })

        return store.dispatch(updateMovies("release_date")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })

    it('On a failed fetch updated movie data request', () => {
        fetchMock.getOnce('*', {} )

        const expectedActions = [
            { type: C.FETCH_SET_DATA, payload: undefined }
        ]

        const store = mockStore({ state: [] })

        return store.dispatch(updateMovies("kill","title")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    }) 
})

describe('fetch movie data actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    it('creates fetchMovieData when fetching movie data has been done', () => {
        fetchMock.getOnce('*', {
            data:['do something']
        })

        const expectedActions = [
            { type: C.FETCH_SET_MOVIE_DATA, payload: {"data":['do something']} }
        ]
        const store = mockStore({ state: [] })

        return store.dispatch(fetchAndSetMovieData(24)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })

    it('On a failed fetch movie data request', () => {
        fetchMock.getOnce('*', {} )
        const expectedActions = [
            { type: C.FETCH_SET_MOVIE_DATA, payload: {} }
        ]

        const store = mockStore({ state: [] })

        return store.dispatch(fetchAndSetMovieData("kill","title")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    }) 
})

