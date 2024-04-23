import urls from "./urls.js";
import {
  METHOD_GET,
  METHOD_POST,
  METHOD_PUT,
  METHOD_DELETE,
  sendRequest,
} from "./axiosRequest.js";

export async function addClassReq(name, minStuCount, maxStuCount, fkRGFId) {
  return await sendRequest(urls.school.class(), METHOD_POST, {
    name: name,
    minStuCount: minStuCount,
    maxStuCount: maxStuCount,
    fkRGFId: fkRGFId,
  });
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

export async function getClassificationPatterns() {
  return await sendRequest(urls.school.pattern(), METHOD_GET);
}

export async function assignStuToClass() {
  return await sendRequest(urls.school.submit(), METHOD_POST);
}

export async function getConstraints() {
  return await sendRequest(urls.school.customize(), METHOD_GET);
}

export async function addCustomize() {
  return await sendRequest(urls.school.addcustomize(), METHOD_POST);
}

export async function deleteCustomize() {
  return await sendRequest(urls.school.dltcustomize(), METHOD_DELETE);
}
