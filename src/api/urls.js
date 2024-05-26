const API_BASE_URL = "https://api.behpouyan.ir";

const urls = {
  school:{
    class:()=> `${API_BASE_URL}/Class`,
    grade:()=> `${API_BASE_URL}/GetGradeAndFields`,
    pattern:(RGFId)=> `${API_BASE_URL}/ClassificationPatterns?RGFId=${RGFId}`,
    assignStuToClass:(RGFId)=> `${API_BASE_URL}/AssignStuToClass?RGFId=${RGFId}`,
    customizePattern:(RGFId)=> `${API_BASE_URL}/Constraints?RGFId=${RGFId}`,
    customConstraint:()=> `${API_BASE_URL}/CustomConstraint`,
  }
};

export default urls;