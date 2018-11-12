import {setSearchBy,UpdateMovies,setSearchText,setResultFound,fetchAndSetData,fetchAndSetMovieData} from '../../js/reducers/reducers';
import C from '../../js/constants/index';

describe('setSearchText reducer', () => {
    it('should set the searchText', () => {
      expect(setSearchText({},{
          type: C.SET_SEARCHTEXT,
          payload: "kill"
      })).toEqual("kill")
    })

    it('should not set the searchText', () => {
        expect(setSearchText({},{
            type: C.SET_SEARCHBY,
            payload: "kill"
        })).toEqual({})
    })

    it('should set default searchText', () => {
        expect(setSearchText(undefined,{
            type: C.SET_SEARCHBY,
            payload: "kill"
        })).toEqual("")
    })
})

describe('setSearchBy reducer', () => {
    it('should set the searchBy', () => {
      expect(setSearchBy({},{
          type: C.SET_SEARCHBY,
          payload: "title"
      })).toEqual("title")
    })

    it('should not set the searchBy', () => {
        expect(setSearchBy({},{
            type: C.SET_SEARCHTEXT,
            payload: "title"
        })).toEqual({})
    })

    it('should set default searchBy', () => {
        expect(setSearchBy(undefined,{
            type: C.SET_SEARCHTEXT,
            payload: "title"
        })).toEqual("title")
    })
})

describe('setResultFound reducer', () => {
    it('should set the setResultFound', () => {
      expect(setResultFound({},{
          type: C.SET_RESULTSFOUND,
          payload: "10"
      })).toEqual("10")
    })

    it('should not set the setResultFound', () => {
        expect(setResultFound({},{
            type: C.SET_SEARCHTEXT,
            payload: "10"
        })).toEqual({})
    })

    it('should set default setResultFound', () => {
        expect(setResultFound(undefined,{
            type: C.SET_SEARCHTEXT,
            payload: "10"
        })).toEqual(null)
      })
})

describe('fetchAndSetData reducer', () => {
    it('should set the fetchAndSetData', () => {
      expect(fetchAndSetData({},{
          type: C.FETCH_SET_DATA,
          payload: []
      })).toEqual([])
    })

    it('should not set the fetchAndSetData', () => {
        expect(fetchAndSetData({},{
            type: C.SET_SEARCHTEXT,
            payload: "kill"
        })).toEqual({})
    })

    it('should default set fetchAndSetData', () => {
        expect(fetchAndSetData(undefined,{
            type: C.SET_SEARCHTEXT,
            payload: "kill"
        })).toEqual([])
    })
})

describe('fetchAndSetMovieData reducer', () => {
    it('should set the fetchAndSetMovieData', () => {
      expect(fetchAndSetMovieData({},{
          type: C.FETCH_SET_MOVIE_DATA,
          payload: []
      })).toEqual([])
    })

    it('should not set the fetchAndSetMovieData', () => {
        expect(fetchAndSetMovieData({},{
            type:  C.SET_SEARCHTEXT,
            payload: []
        })).toEqual({})
    })

    it('should default set fetchAndSetMovieData', () => {
        expect(fetchAndSetMovieData(undefined,{
            type: C.SET_SEARCHTEXT,
            payload: []
        })).toEqual([])
    })
})

describe('UpdateMovies reducer', () => {
    it('should set the UpdateMovies', () => {
      expect(UpdateMovies({},{
          type: C.UPDATE_MOVIES,
          payload: []
      })).toEqual([])
    })

    it('should not set the UpdateMovies', () => {
        expect(UpdateMovies({},{
            type: C.SET_SEARCHTEXT,
            payload: []
        })).toEqual({})
    })

    it('should default set UpdateMovies', () => {
        expect(UpdateMovies(undefined,{
            type: C.SET_SEARCHTEXT,
            payload: []
        })).toEqual([])
    })
})
