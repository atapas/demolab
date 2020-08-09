import React, { useState, useEffect } from "react"
import FeatureSupport from "../../components/utils/feature-support"
import { Battery, BatteryCharging } from "react-feather"

export default () => {
  const [charging, setCharging] = useState(false)
  const [level, setLevel] = useState(0)
  const [chargingTime, setChargingTime] = useState(0)
  const [dischargingTime, setDischargingTime] = useState(0)
  const [supported, SetSupported] = useState(false)

  useEffect(() => {
    if (navigator.getBattery) {
      SetSupported(true)
      navigator.getBattery().then(function (battery) {
        function updateAllBatteryInfo() {
          updateChargeInfo()
          updateLevelInfo()
          updateChargingInfo()
          updateDischargingInfo()
        }
        updateAllBatteryInfo()

        battery.addEventListener("chargingchange", function () {
          updateChargeInfo()
        })
        function updateChargeInfo() {
          console.log("Battery charging? " + (battery.charging ? "Yes" : "No"))
          setCharging(battery.charging)
        }

        battery.addEventListener("levelchange", function () {
          updateLevelInfo()
        })
        function updateLevelInfo() {
          console.log("Battery level: " + battery.level * 100 + "%")
          setLevel(battery.level * 100)
        }

        battery.addEventListener("chargingtimechange", function () {
          updateChargingInfo()
        })
        function updateChargingInfo() {
          console.log(
            "Battery charging time: " + battery.chargingTime + " seconds"
          )
          setChargingTime(battery.chargingTime)
        }

        battery.addEventListener("dischargingtimechange", function () {
          updateDischargingInfo()
        })
        function updateDischargingInfo() {
          console.log(
            "Battery discharging time: " + battery.dischargingTime + " seconds"
          )
          setDischargingTime(battery.dischargingTime)
        }
      })
    } else {
      SetSupported(false)
    }
  }, [level])

  const getColor = () => {
    let color = "#FFFFFF"

    if (level >= 0 && level <= 20) {
      color = "#FF0000"
    } else if (level > 20 && level <= 60) {
      color = "#FFBF00"
    }
    if (level > 60 && level <= 100) {
      color = "#008000"
    }
    return color
  }

  const getBatteryInfo = () => {
    return (
      <>
        <h3>Battery Information</h3>
        <ul>
          <li>
            <span>Battery Charging? </span>
            {charging ? <span>Yes</span> : <span>No</span>}
          </li>
          <li>
            <span>Battery Level: </span>
            <span>{`${level}%`}</span>
          </li>
          <li>
            {charging ? (
              <>
                <span>Charging Time: </span>
                <span>{`Since ${chargingTime / 1000} minutes`}</span>
              </>
            ) : (
              <>
                <span>Discharging Time: </span>
                <span>{`Since ${dischargingTime / 1000} minutes`}</span>
              </>
            )}
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <FeatureSupport
        support={supported}
        feature={"Battery Status API"}
        caniuseLink={"https://caniuse.com/#feat=battery-status"}
      />
      {supported ? (
        <div>
          <>
            {charging ? (
              <BatteryCharging color={getColor()} size={256} />
            ) : (
              <Battery color={getColor()} size={256} />
            )}
          </>
          {getBatteryInfo()}
        </div>
      ) : null}
    </>
  )
}
