const API_BASE_URL = "https://api.behpouyan.ir";

const urls = {
  school:{
    class:()=> `${API_BASE_URL}/Class`,
    grade:()=> `${API_BASE_URL}/GetGradeAndFields`,
    pattern:()=> `${API_BASE_URL}/ClassificationPatterns`,
    assignStuToClass:()=> `${API_BASE_URL}/AssignStuToClass`,
    customizePattern:()=> `${API_BASE_URL}/Constraints`,
    addcustomize:()=> `${API_BASE_URL}/addCustomize`,
    dltcustomize:()=> `${API_BASE_URL}/deleteCustomize`,
  }
};

export default urls;