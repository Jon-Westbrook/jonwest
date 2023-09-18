/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 model4.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model4.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
          <skinnedMesh name="avaturn_glasses" geometry={nodes.avaturn_glasses.geometry} material={materials.avaturn_glasses_0_material} skeleton={nodes.avaturn_glasses.skeleton} />
          <skinnedMesh name="avaturn_glasses_glass" geometry={nodes.avaturn_glasses_glass.geometry} material={materials.avaturn_glasses_1_material} skeleton={nodes.avaturn_glasses_glass.skeleton} />
          <skinnedMesh name="avaturn_hair" geometry={nodes.avaturn_hair.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair.skeleton} />
          <skinnedMesh name="avaturn_look" geometry={nodes.avaturn_look.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look.skeleton} />
          <skinnedMesh name="avaturn_shoes" geometry={nodes.avaturn_shoes.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model4.glb')
