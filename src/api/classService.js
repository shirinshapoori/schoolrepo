import urls from "./urls.js";
import {
  METHOD_GET,
  METHOD_POST,
  METHOD_PUT,
  METHOD_DELETE,
  sendRequest,
} from "./axiosRequest.js";
import axios from "axios";

export async function addClassReq(name, minStuCount, maxStuCount, fkRGFId) {
  return await sendRequest(urls.school.class(), METHOD_POST, {
    name: name,
    minStuCount: minStuCount,
    maxStuCount: maxStuCount,
    fkRGFId: fkRGFId,
  });
}
export async function assignStuToClass(RGFId) {
  return await sendRequest(urls.school.assignStuToClass(RGFId), METHOD_POST);
}
export async function updateClassReq() {
  return await sendRequest(urls.school.class(), METHOD_PUT);
}

export async function deleteClassReq() {
  return await sendRequest(urls.school.class(), METHOD_DELETE);
}

export async function getGradeAndFields() {
  return await sendRequest(urls.school.grade(), METHOD_GET);
}

export async function classificationPatterns(RGFId) {
  return await sendRequest(urls.school.pattern(RGFId), METHOD_POST);
}

// export async function assignStuToClass(id) {
//     const {relId} =  await sendRequest(urls.school.assignStuToClass(), METHOD_POST , id);
//     return relId;
// }

export async function constraints(RGFId) {
  return await sendRequest(urls.school.customizePattern(RGFId), METHOD_POST);
}

export async function addOrUpdateCustomConstraints(
  constraintId,
  rgfId,
  percent,
) {
  return await sendRequest(urls.school.customConstraint(), METHOD_POST, {
    constraintId: constraintId,
    rgfId: rgfId,
    percent:percent,
  });
}

// export async function deleteConstraints(constraintGuid) {
//   return await sendRequest(urls.school.customConstraint(), METHOD_DELETE);
// }
  export async function deleteConstraints(constraintGuid) {
  return await axios.delete(urls.school.customConstraint(), {
    data: constraintGuid,
  });
}